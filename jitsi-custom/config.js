var config = {
    disableThirdPartyRequests: false,
    enableLayerSuspension: true,
    p2p: {
        enabled: true,
        stunServers: [
            { urls: 'stun:meet-jit-si-turnrelay.jitsi.net:443' }
        ]
    },
    hosts: {
        domain: 'meet.jitsi',
        muc: 'muc.meet.jitsi',
        focus: 'focus.meet.jitsi'
    },
    bosh: 'http://jitsi-prosody:5280/http-bind',
    websocket: 'ws://jitsi-prosody:5280/xmpp-websocket',
    clientNode: 'http://jitsi.org/jitsimeet',
    enableStatsID: true,
    enableDisplayNameInStats: true,
    enableEmailInStats: false,
    disableAudioLevels: false,
    disableLocalVideoFlip: false,
    channelLastN: -1,
    startVideoMuted: false,
    startAudioMuted: false,
    enableNoAudioDetection: true,
    enableNoisyMicDetection: true,
    enableTalkWhileMuted: false,
    disableH264: false,
    disableVP8: false,
    disableVP9: false,
    preferH264: true,
    disableRtx: false,
    enableTcc: true,
    useStunTurn: true,
    openBridgeChannel: 'websocket',
    deploymentInfo: {
        shard: 'shard1',
        region: 'region1',
        userRegion: 'region1'
    },
    disableAP: false,
    disableAEC: false,
    disableNS: false,
    disableAGC: false,
    disableHPF: false,
    disableDtmf: false,
    enableOpusRed: false,
    opusMaxAverageBitrate: 64000,
    opusMaxPlaybackRate: 48000,
    resolution: 720,
    constraints: {
        video: {
            height: {
                ideal: 720,
                max: 720,
                min: 240
            }
        }
    },
    disableSimulcast: false,
    enableLayerSuspension: true,
    enableRemb: true,
    enableTcc: true,
    useStunTurn: true,
    iceServers: [
        {
            urls: 'stun:meet-jit-si-turnrelay.jitsi.net:443'
        }
    ],
    webrtcIceUdpDisable: false,
    webrtcIceTcpDisable: false,
    enableIceRestart: true,
    useRoomAsSharedDocumentName: false,
    channelLastN: -1,
    startVideoMuted: 0,
    startAudioMuted: 0,
    enableNoAudioDetection: true,
    enableNoisyMicDetection: true,
    enableTalkWhileMuted: false,
    disableH264: false,
    disableVP8: false,
    disableVP9: false,
    preferH264: true,
    disableRtx: false,
    enableTcc: true,
    useStunTurn: true,
    openBridgeChannel: 'websocket',
    enableLayerSuspension: true,
    enableRemb: true,
    enableTcc: true,
    useStunTurn: true,
    iceServers: [
        {
            urls: 'stun:meet-jit-si-turnrelay.jitsi.net:443'
        }
    ],
    webrtcIceUdpDisable: false,
    webrtcIceTcpDisable: false,
    enableIceRestart: true,
    useRoomAsSharedDocumentName: false
};

