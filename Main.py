import eel
import json
import requests

eel.init('web')

@eel.expose
def generate(req):
    data = '{ "long_url": "'+req+'", "domain": "bit.ly"}'
    md5 = ("a61ce0ec664acaa66aefaff3aaf7b88811bb1079")
    headers = {
    'Authorization': f'Bearer {md5}',
    'Content-Type': 'application/json',
    }
    response = requests.post('https://api-ssl.bitly.com/v4/shorten', headers=headers, data=data).json()
    return response['link']

eel.start('Index.html', size=(1000, 500))
