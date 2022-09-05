import requests 

response=requests.get("http://v3.boldsystems.org/index.php/API_Public/combined?geo=Nepal&format=tsv")


print(response.text)
