import React from 'react';
import {View,Text, TouchableOpacity,StyleSheet} from 'react-native';
import { RNCamera } from 'react-native-camera';



const IconWithText = (props)=> {
  return (
      <View>
        <View style={{width:60, height:60,backgroundColor:'green',borderRadius:30}}/>     
        <Text style={{maxWidth:60,alignItems:'center',marginTop:10,fontSize:15,paddingRight:1,paddingLeft:4}}>{props.title}</Text>
      </View>
  )
}

const IconAction = () => {
  return (
    <View style={{width:40, height:40, backgroundColor:'white',borderRadius:20}}/>
  )
}

class ScanQRCode extends React.Component {
  takePicture = async () => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      console.log(data.uri);
    }
  };
  state = {
    barcode:'More Options'
  }
  render(){
    return (
      <View style={{flex:1}}>
        <View style={{flex:1, backgroundColor:'grey'}}>
            <RNCamera
            ref={ref => {
              this.camera = ref;
            }}
            style={styles.preview}
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.on}
            androidCameraPermissionOptions={{
              title: 'Permission to use camera',
              message: 'We need your permission to use your camera',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
            androidRecordAudioPermissionOptions={{
              title: 'Permission to use audio recording',
              message: 'We need your permission to use your audio',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
            onBarCodeRead={(barcode) => {
              console.log(barcode);
              // this.setState({
              //   barcode: barcode.data
              // }),

                  // <WebView
                  //   source={{ uri: this.setState({
                  //     barcode: barcode.data
                  //   }) }}
                  // />      

                  window.location= this.setState({
                      barcode: barcode.data
                     });             
            }}
            
          />
          <View style={{flexDirection:'row',paddingHorizontal:16, marginTop:16, justifyContent:'space-between'}}>
            <IconAction/>
            <View style={{flexDirection:'row', justifyContent:'space-between', width:90}}>
              <IconAction/>
              <IconAction/>
            </View>
          <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
            <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture}>
              <Text style={{ fontSize: 14 }}> SNAP </Text>
            </TouchableOpacity>
          </View>
          </View>
        </View>
        <View style={{height:250, backgroundColor:'white', paddingHorizontal:20}}>
            <View style={{alignItems:'center', marginTop:10,marginBottom:20}}>
              <View style={{width:60,height:5,backgroundColor:'grey',marginVertical:1}}/>
              <View style={{width:60,height:5,backgroundColor:'grey',marginVertical:1}}/>
            </View>
          <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
            <Text style={{fontSize:24,fontWeight:'bold', color:'black'}}> {`${this.state.barcode}`} </Text>
            <Text style={{fontSize:14, color:'green', fontWeight:'bold'}}>Shortcut</Text>
          </View>
          <View style={{flexDirection:'row',alignItems:'flex-start',marginTop:14}}>
            <View style={{flexDirection:'row',alignItems:'flex-start', width:160, justifyContent:'space-between',paddingRight:12}}>
              <IconWithText title="Phone Number"/>
              <IconWithText title="GoPay Code"/>
            </View>
            <View style={{width:1,height:63,backgroundColor:'grey'}}/>
            <View style={{flex:1, paddingLeft:12}}>
              <Text>
                You recent ...
              </Text>
            </View>
            </View>
          </View>
        </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});

export default ScanQRCode;


























// import React, { Component } from "react";
// import {
//   View,
//   WebView,
//   Text,
//   Linking,
//   Dimensions,
//   StyleSheet,
// } from "react-native";

// import QRCodeScanner from "react-native-qrcode-scanner";
// import ModalWebView from './components/ModalWebView'

// export default class QRCodeScreen extends Component {

//   state = {
//     modalVisible: false,
//     success: null,
//     url: '',
//   };

//   openLink = () => {
//     Linking.openURL(this.state.url).catch(err =>
//       alert("An error occured", err)
//     );
//     this.setState({ success: false })
//   };

//   handleButton = () => {
//     this.setState({ modalVisible: !this.state.modalVisible, success: false })
//     this.scanner.reactivate()
//   }

//   onSuccess = async (e) => {
//     await this.setState({ success: true, modalVisible: true, url: e.data });
//   };

//   render() {
//     return (
//       <View style={styles.container}>
//         <QRCodeScanner
//           onRead={this.onSuccess}
//           showMarker={true}
//           checkAndroid6Permissions={true}
//           ref={(elem) => { this.scanner = elem }}
//           cameraStyle={styles.cameraContainer}
//           bottomContent={
//             <View style={styles.touchable}>
//               {this.state.success && (
//                 <Text style={styles.text}>OK. Got it!</Text>
//               )}
//             </View>
//           }
//         />

//          <ModalWebView 
//             handleButton={this.handleButton} 
//             modalVisible={this.state.modalVisible} 
//             url={this.state.url} 
//             openLink={this.openLink} 
//          />

//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: "column",
//     backgroundColor: "black"
//   },
  
//   touchable: {
//     padding: 16
//   },
  
//   text: {
//     fontSize: 21,
//     color: "rgb(0,122,255)"
//   },
  
//   cameraContainer: {
//     height: Dimensions.get('window').height,
//   }
  
// });












// 'use strict';
 
// import React, { Component } from 'react';
 
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   Linking
// } from 'react-native';
 
// import QRCodeScanner from 'react-native-qrcode-scanner';
// import { RNCamera } from 'react-native-camera';
 
// class ScanScreen extends Component {
//   onSuccess = e => {
//     Linking.openURL(e.data).catch(err =>
//       console.error('An error occured', err)
//     );
//   };
 
//   render() {
//     return (
//       <QRCodeScanner
//         onRead={this.onSuccess}
//         flashMode={RNCamera.Constants.FlashMode.torch}
//         topContent={
//           <Text style={styles.centerText}>
//             Go to{' '}
//             <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on
//             your computer and scan the QR code.
//           </Text>
//         }
//         bottomContent={
//           <TouchableOpacity style={styles.buttonTouchable}>
//             <Text style={styles.buttonText}>OK. Got it!</Text>
//           </TouchableOpacity>
//         }
//       />
//     );
//   }
// }
 
// const styles = StyleSheet.create({
//   centerText: {
//     flex: 1,
//     fontSize: 18,
//     padding: 32,
//     color: '#777'
//   },
//   textBold: {
//     fontWeight: '500',
//     color: '#000'
//   },
//   buttonText: {
//     fontSize: 21,
//     color: 'rgb(0,122,255)'
//   },
//   buttonTouchable: {
//     padding: 16
//   }
// });
 
// AppRegistry.registerComponent('default', () => ScanScreen);











// //This is an example code to Scan QR code//
// import React, { Component } from 'react';
// //import react in our code.
// import { Text, View, Linking, TouchableHighlight, PermissionsAndroid, Platform, StyleSheet} from 'react-native';
// // import all basic components
// import { CameraKitCameraScreen, } from 'react-native-camera-kit';
// //import CameraKitCameraScreen we are going to use.
// export default class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       //variable to hold the qr value
//       qrvalue: '',
//       opneScanner: false,
//     };
//   }
//   onOpenlink() {
//     //Function to open URL, If scanned 
//     Linking.openURL(this.state.qrvalue);
//     //Linking used to open the URL in any browser that you have installed
//   }
//   onBarcodeScan(qrvalue) {
//     //called after te successful scanning of QRCode/Barcode
//     this.setState({ qrvalue: qrvalue });
//     this.setState({ opneScanner: false });
//   }
//   onOpneScanner() {
//     var that =this;
//     //To Start Scanning
//     if(Platform.OS === 'android'){
//       async function requestCameraPermission() {
//         try {
//           const granted = await PermissionsAndroid.request(
//             PermissionsAndroid.PERMISSIONS.CAMERA,{
//               'title': 'CameraExample App Camera Permission',
//               'message': 'CameraExample App needs access to your camera '
//             }
//           )
//           if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//             //If CAMERA Permission is granted
//             that.setState({ qrvalue: '' });
//             that.setState({ opneScanner: true });
//           } else {
//             alert("CAMERA permission denied");
//           }
//         } catch (err) {
//           alert("Camera permission err",err);
//           console.warn(err);
//         }
//       }
//       //Calling the camera permission function
//       requestCameraPermission();
//     }else{
//       that.setState({ qrvalue: '' });
//       that.setState({ opneScanner: true });
//     }    
//   }
//   render() {
//     let displayModal;
//     //If qrvalue is set then return this view
//     if (!this.state.opneScanner) {
//       return (
//         <View style={styles.container}>
//             <Text style={styles.heading}>React Native QR Code Example</Text>
//             <Text style={styles.simpleText}>{this.state.qrvalue ? 'Scanned QR Code: '+this.state.qrvalue : ''}</Text>
//             {this.state.qrvalue.includes("http") ? 
//               <TouchableHighlight
//                 onPress={() => this.onOpenlink()}
//                 style={styles.button}>
//                   <Text style={{ color: '#FFFFFF', fontSize: 12 }}>Open Link</Text>
//               </TouchableHighlight>
//               : null
//             }
//             <TouchableHighlight
//               onPress={() => this.onOpneScanner()}
//               style={styles.button}>
//                 <Text style={{ color: '#FFFFFF', fontSize: 12 }}>
//                 Open QR Scanner
//                 </Text>
//             </TouchableHighlight>
//         </View>
//       );
//     }
//     return (
//       <View style={{ flex: 1 }}>
//         <CameraKitCameraScreen
//           showFrame={false}
//           //Show/hide scan frame
//           scanBarcode={true}
//           //Can restrict for the QR Code only
//           laserColor={'blue'}
//           //Color can be of your choice
//           frameColor={'yellow'}
//           //If frame is visible then frame color
//           colorForScannerFrame={'black'}
//           //Scanner Frame color
//           onReadCode={event =>
//             this.onBarcodeScan(event.nativeEvent.codeStringValue)
//           }
//         />
//       </View>
//     );
//   }
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor:'white'
//   },
//   button: {
//     alignItems: 'center',
//     backgroundColor: '#2c3539',
//     padding: 10,
//     width:300,
//     marginTop:16
//   },
//   heading: { 
//     color: 'black', 
//     fontSize: 24, 
//     alignSelf: 'center', 
//     padding: 10, 
//     marginTop: 30 
//   },
//   simpleText: { 
//     color: 'black', 
//     fontSize: 20, 
//     alignSelf: 'center', 
//     padding: 10, 
//     marginTop: 16
//   }
// });





// import React, { Component, Fragment } from 'react';
// import QRCodeScanner from 'react-native-qrcode-scanner';
// import styles from './scanStyle'
// import {
//     TouchableOpacity,
//     Text,
//     StatusBar,
//     Linking,
//     View
// } from 'react-native';

// import {
//     Header,
//     Colors,
// } from 'react-native/Libraries/NewAppScreen';

// class Scan extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             scan: false,
//             ScanResult: false,
//             result: null
//         };
//     }

//     onSuccess = (e) => {
//         const check = e.data.substring(0, 4);
//         console.log('scanned data' + check);
//         this.setState({
//             result: e,
//             scan: false,
//             ScanResult: true
//         })
//         if (check === 'http') {
//             Linking
//                 .openURL(e.data)
//                 .catch(err => console.error('An error occured', err));


//         } else {
//             this.setState({
//                 result: e,
//                 scan: false,
//                 ScanResult: true
//             })
//         }

//     }

//     activeQR = () => {
//         this.setState({
//             scan: true
//         })
//     }
//     scanAgain = () => {
//         this.setState({
//             scan: true,
//             ScanResult: false
//         })
//     }
//     render() {
//         const { scan, ScanResult, result } = this.state
//         const desccription = 'QR code (abbreviated from Quick Response Code) is the trademark for a type of matrix barcode (or two-dimensional barcode) first designed in 1994 for the automotive industry in Japan. A barcode is a machine-readable optical label that contains information about the item to which it is attached. In practice, QR codes often contain data for a locator, identifier, or tracker that points to a website or application. A QR code uses four standardized encoding modes (numeric, alphanumeric, byte/binary, and kanji) to store data efficiently; extensions may also be used.'
//         return (
//             <View style={styles.scrollViewStyle}>
//                 <Fragment>
//                     <StatusBar barStyle="dark-content" />
//                     <Text style={styles.textTitle}>Welcome To React-Native QR Code Tutorial !</Text>
//                     {!scan && !ScanResult &&
//                         <View style={styles.cardView} >
//                             <Text numberOfLines={8} style={styles.descText}>{desccription}</Text>

//                             <TouchableOpacity onPress={this.activeQR} style={styles.buttonTouchable}>
//                                 <Text style={styles.buttonTextStyle}>Click to Scan !</Text>
//                             </TouchableOpacity>

//                         </View>
//                     }

//                     {ScanResult &&
//                         <Fragment>
//                             <Text style={styles.textTitle1}>Result !</Text>
//                             <View style={ScanResult ? styles.scanCardView : styles.cardView}>
//                                 <Text>Type : {result.type}</Text>
//                                 <Text>Result : {result.data}</Text>
//                                 <Text numberOfLines={1}>RawData: {result.rawData}</Text>
//                                 <TouchableOpacity onPress={this.scanAgain} style={styles.buttonTouchable}>
//                                     <Text style={styles.buttonTextStyle}>Click to Scan again!</Text>
//                                 </TouchableOpacity>

//                             </View>
//                         </Fragment>
//                     }


//                     {scan &&
//                         <QRCodeScanner
//                             reactivate={true}
//                             showMarker={true}
//                             ref={(node) => { this.scanner = node }}
//                             onRead={this.onSuccess}
//                             topContent={
//                                 <Text style={styles.centerText}>
//                                     Go to <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on your computer and scan the QR code to test.</Text>
//                             }
//                             bottomContent={
//                                 <View>
//                                     <TouchableOpacity style={styles.buttonTouchable} onPress={() => this.scanner.reactivate()}>
//                                         <Text style={styles.buttonTextStyle}>OK. Got it!</Text>
//                                     </TouchableOpacity>

//                                     <TouchableOpacity style={styles.buttonTouchable} onPress={() => this.setState({ scan: false })}>
//                                         <Text style={styles.buttonTextStyle}>Stop Scan</Text>
//                                     </TouchableOpacity>
//                                 </View>

//                             }
//                         />
//                     }
//                 </Fragment>
//             </View>

//         );
//     }
// }



// export default Scan;








// import React, { Component, Fragment } from 'react';
// import QRCodeScanner from 'react-native-qrcode-scanner';
// import styles from './scanStyle'
// import {
//     TouchableOpacity,
//     Text,
//     StatusBar,
//     Linking,
//     View
// } from 'react-native';

// import {
//     Header,
//     Colors,
// } from 'react-native/Libraries/NewAppScreen';

// class Scan extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             scan: false,
//             ScanResult: false,
//             result: null
//         };
//     }

//     onSuccess = (e) => {
//         const check = e.data.substring(0, 4);
//         console.log('scanned data' + check);
//         this.setState({
//             result: e,
//             scan: false,
//             ScanResult: true
//         })
//         if (check === 'http') {
//             Linking
//                 .openURL(e.data)
//                 .catch(err => console.error('An error occured', err));


//         } else {
//             this.setState({
//                 result: e,
//                 scan: false,
//                 ScanResult: true
//             })
//         }

//     }

//     activeQR = () => {
//         this.setState({
//             scan: true
//         })
//     }
//     scanAgain = () => {
//         this.setState({
//             scan: true,
//             ScanResult: false
//         })
//     }
//     render() {
//         const { scan, ScanResult, result } = this.state
//         const desccription 
//         return (
//             <View style={styles.scrollViewStyle}>
//                 <Fragment>
//                     <StatusBar barStyle="dark-content" />
//                     <Text style={styles.textTitle}>Welcome To React-Native QR Code Tutorial !</Text>
//                     {!scan && !ScanResult &&
//                         <View style={styles.cardView} >
//                             <Text numberOfLines={8} style={styles.descText}>{desccription}</Text>

//                             <TouchableOpacity onPress={this.activeQR} style={styles.buttonTouchable}>
//                                 <Text style={styles.buttonTextStyle}>Click to Scan !</Text>
//                             </TouchableOpacity>

//                         </View>
//                     }

//                     {ScanResult &&
//                         <Fragment>
//                             <Text style={styles.textTitle1}>Result !</Text>
//                             <View style={ScanResult ? styles.scanCardView : styles.cardView}>
//                                 <Text>Type : {result.type}</Text>
//                                 <Text>Result : {result.data}</Text>
//                                 <Text numberOfLines={1}>RawData: {result.rawData}</Text>
//                                 <TouchableOpacity onPress={this.scanAgain} style={styles.buttonTouchable}>
//                                     <Text style={styles.buttonTextStyle}>Click to Scan again!</Text>
//                                 </TouchableOpacity>

//                             </View>
//                         </Fragment>
//                     }


//                     {scan &&
//                         <QRCodeScanner
//                             reactivate={true}
//                             showMarker={true}
//                             ref={(node) => { this.scanner = node }}
//                             onRead={this.onSuccess}
//                             topContent={
//                                 <Text style={styles.centerText}>
//                                     Go to <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on your computer and scan the QR code to test.</Text>
//                             }
//                             bottomContent={
//                                 <View>
//                                     <TouchableOpacity style={styles.buttonTouchable} onPress={() => this.scanner.reactivate()}>
//                                         <Text style={styles.buttonTextStyle}>OK. Got it!</Text>
//                                     </TouchableOpacity>

//                                     <TouchableOpacity style={styles.buttonTouchable} onPress={() => this.setState({ scan: false })}>
//                                         <Text style={styles.buttonTextStyle}>Stop Scan</Text>
//                                     </TouchableOpacity>
//                                 </View>

//                             }
//                         />
//                     }
//                 </Fragment>
//             </View>

//         );
//     }
// }



// export default Scan;



// 'use strict';

// import React, { Component } from 'react';

// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   Linking
// } from 'react-native';

// import QRCodeScanner from 'react-native-qrcode-scanner';
// import { RNCamera } from 'react-native-camera';

// class ScanScreen extends Component {
//   onSuccess = e => {
//     Linking.openURL(e.data).catch(err =>
//       console.error('An error occured', err)
//     );
//   };

//   render() {
//     return (
//       <QRCodeScanner
//         onRead={this.onSuccess}
//         flashMode={RNCamera.Constants.FlashMode.torch}
//         topContent={
//           <Text style={styles.centerText}>
//             Go to{' '}
//             <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on
//             your computer and scan the QR code.
//           </Text>
//         }
//         bottomContent={
//           <TouchableOpacity style={styles.buttonTouchable}>
//             <Text style={styles.buttonText}>OK. Got it!</Text>
//           </TouchableOpacity>
//         }
//       />
//     );
//   }
// }

// const styles = StyleSheet.create({
//   centerText: {
//     flex: 1,
//     fontSize: 18,
//     padding: 32,
//     color: '#777'
//   },
//   textBold: {
//     fontWeight: '500',
//     color: '#000'
//   },
//   buttonText: {
//     fontSize: 21,
//     color: 'rgb(0,122,255)'
//   },
//   buttonTouchable: {
//     padding: 16
//   }
// });

// AppRegistry.registerComponent('default', () => ScanScreen);





// import React, { Component,useCallback } from 'react';
// import {View,Text, TouchableOpacity,StyleSheet,Linking, Alert, Button  } from 'react-native';
// import { RNCamera } from 'react-native-camera';
// import { WebView } from 'react-native-webview';



// class ScanQRCode extends React.Component {
//   takePicture = async () => {
//     if (this.camera) {
//       const options = { quality: 0.5, base64: true };
//       const data = await this.camera.takePictureAsync(options);
//       console.log(data.uri);
//     }
//   };

//   render(){
//     return (
//       <View style={{flex:1}}>
//         <View style={{flex:1, backgroundColor:'grey'}}>
//             <RNCamera
//             ref={ref => {
//               this.camera = ref;
//             }}
//             style={styles.preview}
//             type={RNCamera.Constants.Type.back}
//             flashMode={RNCamera.Constants.FlashMode.on}
//             androidCameraPermissionOptions={{
//               title: 'Permission to use camera',
//               message: 'We need your permission to use your camera',
//               buttonPositive: 'Ok',
//               buttonNegative: 'Cancel',
//             }}
//             androidRecordAudioPermissionOptions={{
//               title: 'Permission to use audio recording',
//               message: 'We need your permission to use your audio',
//               buttonPositive: 'Ok',
//               buttonNegative: 'Cancel',
//             }}
//             onBarCodeRead={(barcode) => {

//              const uri = barcode.data
//               // //webkitURL(url)
//               // //<URL>barcode.data</URL>
//              console.log(barcode.data);

             

//             //    <WebView
//             //    source={{ uri: url }}
//             //  />      
                  
//             }}
//           />                  
//           </View>
//         </View>
//     )
//   }
// }


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'column',
//     backgroundColor: 'black',
//   },
//   preview: {
//     flex: 1,
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//   },
//   capture: {
//     flex: 0,
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     padding: 20,
//     paddingHorizontal: 20,
//     alignSelf: 'center',
//     margin: 20,
//   },
// });

// export default ScanQRCode;

















// import React, { useCallback } from "react";
// import { Alert, Button, Linking, StyleSheet, View } from "react-native";

// const supportedURL = "https://google.com";

// const unsupportedURL = "slack://open?team=123456";

// const OpenURLButton = ({ url, children }) => {
//   const handlePress = useCallback(async () => {
//     // Checking if the link is supported for links with custom URL scheme.
//     const supported = await Linking.canOpenURL(url);

//     if (supported) {
//       // Opening the link with some app, if the URL scheme is "http" the web link should be opened
//       // by some browser in the mobile
//       await Linking.openURL(url);
//     } else {
//       Alert.alert(`Don't know how to open this URL: ${url}`);
//     }
//   }, [url]);

//   return <Button title={children} onPress={handlePress} />;
// };

// const App = () => {
//   return (
//     <View style={styles.container}>
//       <OpenURLButton url={supportedURL}>Open Supported URL</OpenURLButton>
//       <OpenURLButton url={unsupportedURL}>Open Unsupported URL</OpenURLButton>
//     </View>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: "center", alignItems: "center" },
// });















// import React, { Component } from 'react';
// import {
// AppRegistry,
// StyleSheet,
// Text,
// View,
// Linking,
// Vibration,
// Dimensions
// } from 'react-native';

// import Camera from 'react-native-camera';

// export default class ReactBarcodeScannerProject extends Component {

// _handleBarCodeRead(e) {
//     Vibration.vibrate();
//     this.setState({scanning: false});    
//     Linking.openURL(e.data).catch(err => console.error('An error occured', err));
//     return;
// }  
// getInitialState() {
//         return {
//             scanning: true,
//             cameraType: Camera.constants.Type.back
//         }
// }   
// render() {
//     if(this.state.scanning) {
//     return (
//     <View style={styles.container}>
//         <Text style={styles.welcome}>
//         Barcode Scanner
//         </Text>
//         <View style={styles.rectangleContainer}>
//         <Camera style={styles.camera} type={this.state.cameraType} onBarCodeRead={this._handleBarCodeRead.bind(this)}>
//             <View style={styles.rectangleContainer}>
//             <View style={styles.rectangle}/>
//             </View>            
//         </Camera>
//         </View>
//         <Text style={styles.instructions}>
//         Double tap R on your keyboard to reload,{'\n'}
//         </Text>
//     </View>
//     );
//     }
//     else{
//     return (<View  style={styles.container}>
//         <Text style={styles.welcome}>
//         Barcode Scanner
//         </Text>      
//         <Text style={styles.instructions}>
//         Double tap R on your keyboard to reload,{'\n'}
//         </Text>     
//     </View>);
//     }
// }
// }

// const styles = StyleSheet.create({
// container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
// },
// camera: {
//     flex: 0,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: 'transparent',
//     height: Dimensions.get('window').width,
//     width: Dimensions.get('window').width,
// },  
// welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
// },
// instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
// },
// rectangleContainer: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: 'transparent',
// },

// rectangle: {
//     height: 250,
//     width: 250,
//     borderWidth: 2,
//     borderColor: '#00FF00',
//     backgroundColor: 'transparent',
// },  
// });

// //AppRegistry.registerComponent('ReactBarcodeScannerProject', () => ReactBarcodeScannerProject); 