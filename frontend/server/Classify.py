from ximilar.client import RecognitionClient

client = RecognitionClient(token="45d54f4ac2c6c4599fafdfad7590cd4410c46444")

task, status = client.get_task(task_id='5bff2c44-f421-4189-8827-600402e6f6e7')

# you can send image in _file, _url or _base64 format
# the _file format is intenally converted to _base64 as rgb image
result = task.classify([{'_file': '/Users/osamahatem/FishNShip/training/Basses\seabass1.jpg'}])

# the result is in json/dictionary format and you can access it in following way:
best_label = result['records'][0]['best_label']
print(best_label)