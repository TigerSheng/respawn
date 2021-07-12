from brownie import CollectibleMemo, network, config, accounts
from metadata import sample_metadata
from pathlib import Path
import os
import requests
import json


def main():
    print("Working on "+ network.show_active())
    collectible_memo = CollectibleMemo[len(CollectibleMemo) - 1]
    number_of_tokens = collectible_memo.tokenCounter()
    print('The number of tokens you have deployed is {}'.format(number_of_tokens))
    write_metadata(number_of_tokens, collectible_memo)


def write_metadata(number_of_tokens, nft_contract):
    collectible_memo = CollectibleMemo[len(CollectibleMemo) - 1]
    for token_id in range(number_of_tokens):
        collectible_metadata = sample_metadata.metadata_template
        metadata_file_name = (
            "./metadata/{}".format(network.show_active()) + '/' + str(token_id) + '.json'
        ) 
        if Path(metadata_file_name).exists():
            print("{} already found!".format(metadata_file_name))
        else:
            print('Creating Metadata File {}'.format(metadata_file_name))
            print(collectible_metadata)
            payload = None
            if os.getenv("UPLOAD_IPFS") == 'true':
                image_path = './payload/doge.jpg'
                payload = upload_to_ipfs(image_path)
            collectible_metadata['image'] = payload
            with open(metadata_file_name, 'w') as file:
                json.dump(collectible_metadata, file)
            if os.getenv("UPLOAD_IPFS") == 'true':
                metadata_path = upload_to_ipfs(metadata_file_name)

            if not collectible_memo.tokenURI(token_id).startswith("https://"):
                print("Setting tokenURI of {}".format(token_id))
                set_tokenURI(token_id, collectible_memo, metadata_path)


def upload_to_ipfs(filepath):
    with Path(filepath).open("rb") as fp:
        payload_binary = fp.read()
        ipfs_url = "http://localhost:5001"
        response = requests.post(
            ipfs_url + "/api/v0/add", files={'file': payload_binary})
        print(response.json())
        ipfs_hash = response.json()['Hash']
        filename = filepath.split('/')[-1:][0]
        uri = "https://ipfs.io/ipfs/{}?filename={}".format(ipfs_hash, filename)
        print(uri)
        return uri
    return None


def set_tokenURI(token_id, nft_contract, tokenURI):
    dev = accounts.add(config['wallets']['from_key'])
    nft_contract.setTokenURI(token_id, tokenURI, {'from': dev})
    print("You can view your NFT with payload")
    
