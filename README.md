![_141](https://user-images.githubusercontent.com/44854708/111941533-975d1a00-8b14-11eb-9ef4-638d221829d9.png)

우선적으로 면접 당시 위와 같은 에러가 나던 부분을 수정했습니다.

Key를 바꿨음에도 데이터를 제대로 전달받지 못한 원인은 간단했습니다.

![_143](https://user-images.githubusercontent.com/44854708/111941549-9cba6480-8b14-11eb-981b-286daa251816.png)

메일에 있는 활성화 링크를 클릭해줘야 Key가 활성화 되는것인데 그걸 놓쳤었습니다. 활성화 하니 잘 떳습니다.

![_144](https://user-images.githubusercontent.com/44854708/111941552-9f1cbe80-8b14-11eb-9854-d637d292a3fb.png)

또한 그 외 경우에도 movies의 값이 없을경우 "찾으시는 영화 정보가 없습니다" 라고 뜨도록 만들었습니다. 
![_145](https://user-images.githubusercontent.com/44854708/111941554-a0e68200-8b14-11eb-936b-5f097e35df2d.png)
github action을 사용해 push할때 자동으로 deploy되는 action을 만들었습니다

settings - seecrets에 ACCESS_TOKEN 부분에 github Token을 생성해서 넣어 사용했습니다.

