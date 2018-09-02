import React from 'react';
import { RkText, RkStyleSheet } from 'react-native-ui-kitten';
import { Container } from 'native-base';
import { ScrollView, View, ActivityIndicator, Platform,NetInfo } from 'react-native';
import * as loginService from '../../serviceActions/login';

export class UserProfile extends React.Component {
  static navigationOptions = {
    title: 'Profile'.toUpperCase()
  };

  constructor(props) {
    super(props);
    this.state = {
      isOffline: false,
      userInfo :{},
      isLoaded: false,
    }
  }

  componentWillMount() {
    if (Platform.OS !== 'ios') {
      NetInfo.isConnected.fetch().then(isConnected => {
        if (isConnected) {
          this.getUserInfo();
          this.setState({
            isLoading: true
          });
        } else {
          this.setState({
            isLoading: false,
            isOffline: true
          });
        }
        this.setState({
          isOffline: !isConnected
        });
      });
    }
     this.getUserInfo();
    NetInfo.addEventListener(
      'connectionChange',
      this.handleFirstConnectivityChange
    );
  }

  handleFirstConnectivityChange = (connectionInfo) => {
    if (connectionInfo.type != 'none') {
      this.getUserInfo();
      this.setState({
        isLoading: true
      });
    } else {
      this.setState({
        isLoading: false,
        isOffline: true
      });
    }
    this.setState({
      isOffline: connectionInfo.type === 'none',
    });
  };

  componentWillUnmount() {
    NetInfo.removeEventListener(
      'connectionChange',
      this.handleFirstConnectivityChange
    );
  }

  getUserInfo(){
    loginService.getCurrentUser((userInfo)=>{
      if(userInfo){
        this.setState({
          userInfo : userInfo,
          isLoaded : true
        })
       }
      else{
        this.setState({isLoaded:false})
      }
    })
  }

    displayInformation = () => {
    let userInfo = this.state.userInfo;
    let attendeeCode = userInfo.attendeeLabel+"-"+userInfo.attendeeCount;
    let attendeeId = userInfo._id;
    let userName = userInfo.firstName +""+ userInfo.lastName;
    let qrText = "TIE" + ":" + attendeeCode + ":" + attendeeId + ":" + userName;
    return (
      <Container>
        <ScrollView style={styles.root}>
             <View style={styles.section}>
                <View style={[styles.column, styles.heading]}>
                  <RkText style={{color: '#E7060E',fontSize : 25, textAlign: 'center'}}>{userInfo.firstName + " " + userInfo.lastName}</RkText>
                  <RkText style={{fontSize : 20, textAlign: 'center'}} >{userInfo.briefInfo}</RkText>
                </View>
                <View style={[styles.row]}>
                   </View>
                 <View style={{marginTop:10}}>
                   <RkText style={{fontSize : 15, textAlign: 'center'}}>{attendeeCode}</RkText>
                 </View>
              </View>
        </ScrollView>
        <View style={styles.footerOffline}>
          {
            this.state.isOffline ? <RkText rkType="small" style={styles.footerText}>The Internet connection appears to be offline. </RkText> : null
          }
        </View>
        <View style={styles.footer}>
          <RkText rkType="small" style={styles.footerText}>Powered by</RkText>
          <RkText rkType="small" style={styles.companyName}> Eternus Solutions Pvt. Ltd. </RkText>
        </View>
      </Container>
    );
  }

  render() {
   let Info = this.displayInformation();
        if (this.state.isLoaded) {
            return (
                <Container style={[styles.root]}>
                    <ScrollView>
                        <View>
                            {Info} 
                        </View>
                    </ScrollView>
                </Container>
            )
        }
        else {
            return (
                <Container style={[styles.root]}>
                    <ScrollView>
                    <View style={[styles.loading]}>
                        <ActivityIndicator size='small' />
                    </View>
                    </ScrollView>
                    <View style={[styles.footerOffline]}>
                        {
                            this.state.isOffline ? <RkText rkType="small" style={[styles.footerText]}>The Internet connection appears to be offline. </RkText> : null
                        }
                    </View>
                    <View style={[styles.footer]}>
                        <RkText rkType="small" style={[styles.footerText]}>Powered by</RkText>
                        <RkText rkType="small" style={[styles.companyName]}> Eternus Solutions Pvt. Ltd. </RkText>
                    </View>
                </Container>
            )
        }
   }
}

let styles = RkStyleSheet.create(theme => ({
  root: {
    backgroundColor: theme.colors.screen.base
  },
  header: {
    backgroundColor: theme.colors.screen.base,
    paddingVertical: 25
  },
  section: {
    backgroundColor: theme.colors.screen.base,
    marginTop: 35
  },
 heading: {
      paddingBottom: 12.5
    },
  column: {
    flexDirection: 'column',
    borderColor: theme.colors.border.base,
    alignItems: 'center'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    borderColor :'black'
  },
  eternusLogo: {
    height: 80,
    width: 180,
    /*height: scaleVertical(55),*/
    resizeMode: 'contain',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: '#E7060E'
  },
  footerOffline: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: '#545454'
  },
  footerText: {
    color: '#f0f0f0',
    fontSize: 11,
  },
  companyName: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: 'bold'
  },
}));
