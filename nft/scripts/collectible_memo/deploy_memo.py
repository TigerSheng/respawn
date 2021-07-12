from brownie import CollectibleMemo, accounts, network, config

def main():
    dev = accounts.add(config['wallets']['from_key'])
    print(network.show_active())
    publish_source = False
    collectible_memo = CollectibleMemo.deploy(
        {"from": dev},
        publish_source=publish_source
    )
    return collectible_memo
