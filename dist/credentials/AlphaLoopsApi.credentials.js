"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlphaLoopsApi = void 0;
class AlphaLoopsApi {
    name = 'alphaLoopsApi';
    displayName = 'AlphaLoops API';
    documentationUrl = 'https://runalphaloops.com/fmcsa-api/docs';
    properties = [
        {
            displayName: 'API Key',
            name: 'apiKey',
            type: 'string',
            typeOptions: { password: true },
            default: '',
            required: true,
            placeholder: 'ak_...',
            description: 'Your AlphaLoops API key from https://alphafreight.runalphaloops.com/',
        },
    ];
    authenticate = {
        type: 'generic',
        properties: {
            headers: {
                Authorization: '=Bearer {{$credentials.apiKey}}',
            },
        },
    };
    test = {
        request: {
            baseURL: 'https://api.runalphaloops.com',
            url: '/v1/carriers/2247505',
        },
    };
}
exports.AlphaLoopsApi = AlphaLoopsApi;
