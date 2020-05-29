"# Blockachain_Crypto30" 
Cryptocurrency Project based on Blockchain Using Proof of Work Algorithm.
short description of each Part of Project
Block & Blockchain:
*EC signing/verifying(ed25519 is used)
*SHA3/Keccak
*Genesis Block is default first block of every chain in blockchain Network.
Wallet : 
*for every new user a intial amount is given.
*elliptic cryptography(ed25519) algorithm is used for generating Key Pair.
Transaction and Transaction pool:
*every transaction has unique id by using UUID.
*mining algorthim is also written with minig rate if 1sec.
*every transaction goes to transaction pool where it is mined by miner.
All transaction are published on the PubNub using Express.
All transaction are automatically synced to the older transactions.
