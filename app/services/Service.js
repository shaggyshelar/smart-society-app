import {AsyncStorage} from 'react-native';

export default class Service {
    static getDocRef(docName) {
        return "";
    }

    static addSnapshotListener(docName, successFn, errorFn) {
        Service.getDocRef(docName).onSnapshot((snapshot) => {
            //Audit Statements
            successFn(snapshot);
        }).catch((error)=>{
            if(errorFn){
                errorFn(error);
            }
        });
    }
    static getList(docName, successFn, errorFn){
        Service.getDocRef(docName).get().then(
            (snapshot)=>{
                successFn(snapshot)
            }
        ).catch((error)=>{
            if(errorFn){
                errorFn(error);
            }
        });
    }

    static getDocument(collection, document, successFn,errorFn){
    }

    static getCurrentUser(successFn, errorFn){
        AsyncStorage.getItem("USER_DETAILS").then((userDetails)=>{
                successFn(JSON.parse(userDetails));
            }).catch(err => {
                console.warn('Errors');
                if(errorFn){
                    errorFn(err);
                }
                
        });
    }
}