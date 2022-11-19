# HashingNetwork
A hashing network written in Nodejs, wich allows distubuted mining in a network.
Phones, Ipads or PCs can connect to the server in a local network and begin mining.
The number of leading zeros can be defined in the index.js (backend), 
and all nodes in the network will then try to generate datasets with that specific hash.
If such a dataset is found it, will be sent to the server, wich then saves it locally using nedb. 
