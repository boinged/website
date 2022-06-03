The front end is hosted on Google App Engine and comprises a Vue.js client and Node.js server. The server calls an endpoint on the api server which queries MongoDB for the content.
The api server runs on a low availability kubernetes cluster consisting of 2x f1-micro and using HAProxy as an ingress controller instead of the GCP load balancer.
A stable IP address for the ingress is achieved using kubeIP.
<p>
The front end has combined CI/CD and the api service separate CI and CD for manually triggered deployments via git push.
The infrastructure is defined and applied using Terraform. 
<p>
TODO:
<ul>
	<li>Store tfstate on GCS</li>
	<li>Update api-env manifest in app cloud build to auto deploy</li>
	<li>SSL on api server</li>
	<li>CD for kubeIP and HAProxy</li>
	<li>Run all triggers after provisioning</li>
	<li>gRPC between front-end server and api server</li>
	<li>socket-io</li>
</ul>
Built with <a href="https://cloud.google.com/shell">Google Cloud Shell</a> using the following technologies:
<ul>
	<li><a href="https://cloud.google.com/appengine">Google App Engine</a></li>
	<li><a href="https://cloud.google.com/kubernetes-engine">Google Kubernetes Engine</a></li>
	<li><a href="https://cloud.google.com/cloud-build">Google Cloud Build</a></li>
	<li><a href="https://www.terraform.io/">Terraform</a></li>
	<li><a href="https://github.com/doitintl/kubeip">kubeIP</a></li>
	<li><a href="https://www.haproxy.com/">HAProxy</a></li>
	<li><a href="https://nodejs.org/en/">Node.js</a></li>
	<li><a href="https://www.typescriptlang.org/">TypeScript</a></li>
	<li><a href="https://www.fastify.io/">Fastify</a></li>
	<li><a href="https://vuejs.org/">Vue.js</a></li>
</ul>
Resources:
<ul>
	<li><a href="https://medium.com/swlh/how-to-kubernetes-for-cheap-on-google-cloud-68203608f00a">How to: Kubernetes for Cheap on Google Cloud</a></li>
	<li><a href="https://cloud.google.com/kubernetes-engine/docs/how-to/small-cluster-tuning">Reducing add-on resource usage in smaller clusters</a></li>
	<li><a href="https://www.haproxy.com/blog/dissecting-the-haproxy-kubernetes-ingress-controller/">Dissecting the HAProxy Kubernetes Ingress Controller</a></li>
	<li><a href="http://alesnosek.com/blog/2017/02/14/accessing-kubernetes-pods-from-outside-of-the-cluster/">Accessing Kubernetes Pods from Outside of the Cluster</a></li>
	<li><a href="https://cloud.google.com/kubernetes-engine/docs/tutorials/gitops-cloud-build">GitOps-style continuous delivery with Cloud Build</a></li>
	<li><a href="https://cloud.google.com/cloud-build/docs/deploying-builds/deploy-gke">Deploying to GKE</a></li>
</ul>
Source available on <a href="https://github.com/boinged">GitHub</a>
