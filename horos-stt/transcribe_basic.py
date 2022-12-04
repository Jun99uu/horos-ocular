from urllib import request
from ast import literal_eval
import boto3
from botocore.config import Config

# Transcribe를 위한 Config 설정
my_config = Config( 
	region_name = 'ap_northeast-1',
    signature_version = 'v4',
    retries={
    	'max_attempts':5,
        'mode':'standard'
    	}
    )

# Transcribe 실행
transcribe =boto3.client('transcribe', config=my_config)
# s3에 업로드한 파일 URL
job_uri = 'https://s3.ap-northeast-1.amazonaws.com/horosocular/ifonly.mp4'
transcribe.start_transcription_job(
    TranscriptionJobName="ifonly.mp4",
    Media={'MediaFileUri': job_uri},
    MediaFormat='wav',
    LanguageCode='en-US',
    Settings={
        'ShowSpeakerLabels' : False, # 화자분리 기능 True or False
        'MaxSpeakerLabels' : 2 # 화자수 
    }
)

# Transcribe job 작업이 끝나면 결과값 불러옴
while True:
    status = transcribe.get_transcription_job(TranscriptionJobName="ifonly.mp4")
    if status['TranscriptionJob']['TranscriptionJobStatus'] in ['COMPLETED', 'FAILED']:
        save_json_uri = status['TranscriptionJob']['Transcript']['TranscriptFileUri']
        break
        
# Transcribe 결과가 저장된 웹주소
save_json_uri = status['TranscriptionJob']['Transcript']['TranscriptFileUri']   

 # 웹서버 결과 파이썬으로 불러오기
load = request.urlopen(save_json_uri)
confirm = load.status
rst = load.read().decode('utf-8')

# 문자열을 딕셔너리로 변환 후 결과 가져오기
transcribe_text = literal_eval(rst)['results']['transcripts'][0]['transcript']

print(transcribe_text)