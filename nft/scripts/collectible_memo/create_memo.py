from brownie import CollectibleMemo, accounts, config

def main():
    dev = accounts.add(config['wallets']['from_key'])
    collectible_memo = CollectibleMemo[len(CollectibleMemo) - 1]
    transaction = collectible_memo.createMemo("TEST", {'from': dev})