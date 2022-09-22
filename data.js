var APP_DATA = {
  "scenes": [
    {
      "id": "0-lobby",
      "name": "Lobby",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 1.686844972186747,
        "pitch": 0.1289413473371699,
        "fov": 1.2933824216075565
      },
      "linkHotspots": [
        {
          "yaw": -2.6867613741556777,
          "pitch": 0.23543036198422662,
          "rotation": 0,
          "target": "1-clinical-room--store"
        },
        {
          "yaw": 1.7406105771006226,
          "pitch": 0.13984410830638083,
          "rotation": 0,
          "target": "2-reception--corridor-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-clinical-room--store",
      "name": "Clinical room & store",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 0.36251112210017133,
        "pitch": 0.1589902081468857,
        "fov": 1.2933824216075565
      },
      "linkHotspots": [
        {
          "yaw": 2.8888797484093853,
          "pitch": 0.15915403185156052,
          "rotation": 0,
          "target": "0-lobby"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-reception--corridor-1",
      "name": "Reception + Corridor 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 1.1473982154936948,
        "pitch": -0.00332246785847623,
        "fov": 1.2933824216075565
      },
      "linkHotspots": [
        {
          "yaw": 1.1718109233178389,
          "pitch": 0.10502843811831397,
          "rotation": 0,
          "target": "4-corridor-2"
        },
        {
          "yaw": -2.724885798471343,
          "pitch": 0.13501779455774354,
          "rotation": 0,
          "target": "3-office"
        },
        {
          "yaw": -2.0314185298649257,
          "pitch": 0.14061102070263765,
          "rotation": 0,
          "target": "0-lobby"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-office",
      "name": "Office",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 0.8231802886870287,
        "pitch": 0.04736551589617477,
        "fov": 1.2933824216075565
      },
      "linkHotspots": [
        {
          "yaw": -1.7870457144121588,
          "pitch": 0.16902088002363058,
          "rotation": 0,
          "target": "2-reception--corridor-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-corridor-2",
      "name": "Corridor 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 0.8551541973098988,
        "pitch": 0.04184472540495143,
        "fov": 1.2933824216075565
      },
      "linkHotspots": [
        {
          "yaw": 0.7863994173302764,
          "pitch": 0.06569371390161471,
          "rotation": 0,
          "target": "6-corridor-3"
        },
        {
          "yaw": -2.3020511150307,
          "pitch": 0.1298642356559636,
          "rotation": 0,
          "target": "2-reception--corridor-1"
        },
        {
          "yaw": 3.121544326133634,
          "pitch": 0.22568671607877988,
          "rotation": 0,
          "target": "5-acc-wc"
        },
        {
          "yaw": 1.6293001394309794,
          "pitch": 0.14418061021162742,
          "rotation": 0,
          "target": "7-control-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-acc-wc",
      "name": "Acc WC",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 0.5208403170350504,
        "pitch": -0.006620944141289442,
        "fov": 1.2933824216075565
      },
      "linkHotspots": [
        {
          "yaw": -2.572210261418972,
          "pitch": 0.17675513039895563,
          "rotation": 0,
          "target": "4-corridor-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-corridor-3",
      "name": "Corridor 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 0.46989633707540257,
        "pitch": 0.09697812395755356,
        "fov": 1.2933824216075565
      },
      "linkHotspots": [
        {
          "yaw": -2.757590694891622,
          "pitch": 0.12389567010220226,
          "rotation": 0,
          "target": "4-corridor-2"
        },
        {
          "yaw": -3.0585681343189,
          "pitch": 0.16774198409870777,
          "rotation": 0,
          "target": "7-control-room"
        },
        {
          "yaw": 1.4874546661150987,
          "pitch": 0.26411676939073203,
          "rotation": 0,
          "target": "8-ct-scan-room"
        },
        {
          "yaw": 0.3672956212932075,
          "pitch": 0.1295971134763878,
          "rotation": 0,
          "target": "9-corridor-4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-control-room",
      "name": "Control room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -0.1363139906403994,
        "pitch": 0.16506851328390226,
        "fov": 1.2933824216075565
      },
      "linkHotspots": [
        {
          "yaw": 2.889230714009078,
          "pitch": 0.2256215446417329,
          "rotation": 0,
          "target": "4-corridor-2"
        },
        {
          "yaw": -2.2475273125125703,
          "pitch": 0.2000160744982047,
          "rotation": 0,
          "target": "6-corridor-3"
        },
        {
          "yaw": -1.7678186942549345,
          "pitch": 0.19853864043650127,
          "rotation": 0,
          "target": "8-ct-scan-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-ct-scan-room",
      "name": "CT Scan room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 2.753092204747384,
        "pitch": 0.22240594437779215,
        "fov": 1.2933824216075565
      },
      "linkHotspots": [
        {
          "yaw": 0.29994623649734464,
          "pitch": 0.22184206966075593,
          "rotation": 0,
          "target": "6-corridor-3"
        },
        {
          "yaw": -0.7798836641648244,
          "pitch": 0.12889820925746065,
          "rotation": 0,
          "target": "7-control-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-corridor-4",
      "name": "Corridor 4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.9497090503622356,
          "pitch": 0.1318132027368506,
          "rotation": 0,
          "target": "6-corridor-3"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "CT Scanner Project 10/09/21",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
