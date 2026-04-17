import type {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class AlphaLoopsApi implements ICredentialType {
	name = 'alphaLoopsApi';
	displayName = 'AlphaLoops API';
	documentationUrl = 'https://runalphaloops.com/fmcsa-api/docs';

	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			required: true,
			placeholder: 'ak_...',
			description: 'Your AlphaLoops API key from dashboard.runalphaloops.com',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				Authorization: '=Bearer {{$credentials.apiKey}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://api.runalphaloops.com',
			url: '/v1/carriers/2247505',
		},
	};
}
