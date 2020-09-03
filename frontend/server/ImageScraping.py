import pandas as pd
import numpy as np
from urllib.request import urlopen
from bs4 import BeautifulSoup
import urllib.request



#### To integrate with a React app, create a REST API to communicate between 
#### to transfer this functionality to your mobile application



def parseString(asset):
    urlString = ""
    urlStartIndex = asset.index("src") + 5
    endTag = False
    while(endTag == False):
        if(asset[urlStartIndex] == "\""):
            endTag = True
        urlString += asset[urlStartIndex]
        urlStartIndex += 1
    return(urlString[:-1])   
        
        
    


url = "https://www.gettyimages.ca/photos/sea-bass?mediatype=photography&phrase=sea%20bass&sort=mostpopular"
html = urlopen(url)

soup = BeautifulSoup(html, 'lxml')
type(soup)


assets = soup.find_all('gi-asset')
type(assets)


urlList = []
for asset in assets:
    #print(asset)
    #print("\n")
    urlList.append(parseString(str(asset)))
    
urlList.pop() 
for url in urlList:
    print(url)
    print("\n")
    
    
print('Beginning file download with urllib2...')
count = 1
for url in urlList:
    urlDest = 'Basses\seabass'+str(count)+'.jpg'
    urllib.request.urlretrieve(url,urlDest)
    count += 1

print('File Download completed')
