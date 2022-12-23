export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","svelte.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-c48f3189.js","imports":["_app/immutable/start-c48f3189.js","_app/immutable/chunks/index-bcf285ff.js","_app/immutable/chunks/singletons-6bdc4654.js","_app/immutable/chunks/parse-f0c618df.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js'),
			() => import('../output/server/nodes/3.js'),
			() => import('../output/server/nodes/4.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/api/security",
				pattern: /^\/api\/security\/?$/,
				params: [],
				page: null,
				endpoint: () => import('../output/server/entries/endpoints/api/security/_server.ts.js')
			},
			{
				id: "/engagement/timeline/[id]",
				pattern: /^\/engagement\/timeline\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/engagement/[id]",
				pattern: /^\/engagement\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
