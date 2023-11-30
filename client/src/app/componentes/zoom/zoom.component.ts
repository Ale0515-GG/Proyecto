import { Component } from '@angular/core';

@Component({
  selector: 'app-zoom',
  templateUrl: './zoom.component.html',
  styleUrls: ['./zoom.component.css']
})
export class ZoomComponent {

  async ngAfterContentInit():Promise<any>{
    const {ZoomMtg}=await import('@zoomus/websdk');

    ZoomMtg.setZoomJSLib('https://source.zoom.us/lib', '/av');
    ZoomMtg.preLoadWasm();
    ZoomMtg.prepareWebSDK();

    let payload={
      meetingNumber:'',
      passWord:'',
      sdkKey:'',
      sdkSecret:'',
      userName:'Learn with NAK',
      userEmail:'',
      role:'0',
      leaveUrl:'https://localhost:4200/zoom'
    };

    ZoomMtg.generateSDKSignature({
      meetingNumber:payload.meetingNumber,
      role:payload.role,
      sdkKey:payload.sdkKey,
      sdkSecret:payload.sdkSecret,
      success:function(signature:any)
      {
        ZoomMtg.init({
          leaveUrl:payload.leaveUrl,
          success:function(data:any){
            ZoomMtg.join({
              meetingNumber:payload.meetingNumber,
              passWord:payload.passWord,
              sdkKey:payload.sdkKey,
              userName:payload.userName,
              userEmail:payload.userEmail,
              signature:signature.resutl,
              tk:'',
              success:function(data:any){
                console.log(data);
              },
              error:function(error:any){
                console.log('-- Error Join -->',error);
              }

            })
          },error:function(error:any){
            console.log('-- Error Init -->',error);
          }
        })
      },
      error:function(error:any){
        console.log(error);
      }
    })
  }
}
