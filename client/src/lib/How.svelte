<p>The web application is hosted on Google App Engine and comprises a Svelte front end client and Node.js back end server.
The client requests a message from the server via async fetch, then the server calls an endpoint on an API server which queries MongoDB for the content.
The api server is written in TypeScript, using Fastify for low latency and runs as a Google Cloud Run service.</p>

<p>The two components are build with separate CI/CD jobs using Cloud Build.</p>

<p>Work in progress</p>
<ul>
	<li>Add gRPC server to API server &#x2714;</li>
	<li>Connect web application back end to API server via gRPC</li>
</ul>

<p>Built with <a href="https://cloud.google.com/shell" rel="noreferrer" target="_blank">Google Cloud Shell</a> using the following technologies:</p>

<ul>
	<li><a href="https://cloud.google.com/appengine" rel="noreferrer" target="_blank">Google App Engine</a></li>
	<li><a href="https://cloud.google.com/run" rel="noreferrer" target="_blank">Google Cloud Run</a></li>
	<li><a href="https://cloud.google.com/cloud-build" rel="noreferrer" target="_blank">Google Cloud Build</a></li>
	<li><a href="https://nodejs.org/en/" rel="noreferrer" target="_blank">Node.js</a></li>
	<li><a href="https://www.typescriptlang.org/" rel="noreferrer" target="_blank">TypeScript</a></li>
	<li><a href="https://www.fastify.io/" rel="noreferrer" target="_blank">Fastify</a></li>
	<li><a href="https://svelte.dev/" rel="noreferrer" target="_blank">Svelte</a></li>
</ul>

<p>Resources:</p>
<ul>
	<li><a href="https://cloud.google.com/kubernetes-engine/docs/tutorials/gitops-cloud-build" rel="noreferrer" target="_blank">GitOps-style continuous delivery with Cloud Build</a></li>
	<li><a href="https://snyk.io/blog/10-best-practices-to-containerize-nodejs-web-applications-with-docker/" rel="noreferrer" target="_blank">10 best practices to containerize Node.js web applications with Docker</a></li>
</ul>

<p>Source available on <a href="https://github.com/boinged" rel="noreferrer" target="_blank">GitHub</a></p>

<p>Previous version technologies and resources:</p>
<ul>
	<li><a href="https://cloud.google.com/kubernetes-engine" rel="noreferrer" target="_blank">Google Kubernetes Engine</a></li>
	<li><a href="https://www.terraform.io/" rel="noreferrer" target="_blank">Terraform</a></li>
	<li><a href="https://github.com/doitintl/kubeip" rel="noreferrer" target="_blank">kubeIP</a></li>
	<li><a href="https://www.haproxy.com/" rel="noreferrer" target="_blank">HAProxy</a></li>
	<li><a href="https://vuejs.org/" rel="noreferrer" target="_blank">Vue.js</a></li>
	<li><a href="https://medium.com/swlh/how-to-kubernetes-for-cheap-on-google-cloud-68203608f00a" rel="noreferrer" target="_blank">How to: Kubernetes for Cheap on Google Cloud</a></li>
	<li><a href="https://cloud.google.com/kubernetes-engine/docs/how-to/small-cluster-tuning" rel="noreferrer" target="_blank">Reducing add-on resource usage in smaller clusters</a></li>
	<li><a href="https://www.haproxy.com/blog/dissecting-the-haproxy-kubernetes-ingress-controller/" rel="noreferrer" target="_blank">Dissecting the HAProxy Kubernetes Ingress Controller</a></li>
	<li><a href="http://alesnosek.com/blog/2017/02/14/accessing-kubernetes-pods-from-outside-of-the-cluster/" rel="noreferrer" target="_blank">Accessing Kubernetes Pods from Outside of the Cluster</a></li>
	<li><a href="https://cloud.google.com/cloud-build/docs/deploying-builds/deploy-gke" rel="noreferrer" target="_blank">Deploying to GKE</a></li>
</ul>
