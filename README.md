# logReader
Microservice `-write->` log `-read->` Server `->` [Client1, Client2, Client3] 

We can store logs in chunks by using inbuilt `fileHandler = RotatingFileHandler(logFile, maxBytes=5 * 1024 * 1024)`


It will store logs as: 
<img width="501" alt="image" src="https://github.com/user-attachments/assets/7f6f682f-320b-4e0a-82ce-e027e818b74e">

In action:
https://github.com/user-attachments/assets/a8964738-8786-44ae-9a47-fadf3fd43d95

