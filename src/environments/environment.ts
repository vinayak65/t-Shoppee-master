// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

region: 'us-east-2',
     identityPoolId: 'us-east-2:54a8cd2c-0681-47ea-82a2-7c560d127896',
    userPoolId: 'us-east-2_uHuwYpeiX', // 'us-east-2_latestERGdsee',   //'us-east-2_uHuwYpeiX'  , //, // 'us-east-2_uHuwYpeiX',
    clientId:  '7vrvp0q1bb0iumtfp3lp0j8mrh',//'Thisoeddfierdfmgnrerdfwe' , //'4m7k3rm5qbno6ecg5mljp1iaeu', //,

    //rekognitionBucket: 'rekognition-pics',
    //albumName: "usercontent",
   rekognitionBucket: 'vinayzero34',
   albumName: "usercontent",

    bucketRegion: 'us-east-2',

    ddbTableName: 'LoginTrail',

    cognito_idp_endpoint: '',
    cognito_identity_endpoint: '',
    sts_endpoint: '',
    dynamodb_endpoint: '',
    s3_endpoint: ''
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
