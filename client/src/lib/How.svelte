<p>The front end is hosted on Google App Engine and comprises a Vue.js client and Node.js server. The server calls an endpoint on the api server which queries MongoDB for the content.
The api server runs on a low availability kubernetes cluster consisting of 2x f1-micro and using HAProxy as an ingress controller instead of the GCP load balancer.
A stable IP address for the ingress is achieved using kubeIP.</p>

<p>The front end has combined CI/CD and the api service separate CI and CD for manually triggered deployments via git push.
The infrastructure is defined and applied using Terraform.</p>

<p>TODO:</p>
<ul>
	<li>Store tfstate on GCS</li>
	<li>Update api-env manifest in app cloud build to auto deploy</li>
	<li>SSL on api server</li>
	<li>CD for kubeIP and HAProxy</li>
	<li>Run all triggers after provisioning</li>
	<li>gRPC between front-end server and api server</li>
	<li>socket-io</li>
</ul>

<p>Built with <a href="https://cloud.google.com/shell" target="_blank">Google Cloud Shell</a> using the following technologies:</p>

<ul>
	<li><a href="https://cloud.google.com/appengine" target="_blank">Google App Engine</a></li>
	<li><a href="https://cloud.google.com/kubernetes-engine" target="_blank">Google Kubernetes Engine</a></li>
	<li><a href="https://cloud.google.com/cloud-build" target="_blank">Google Cloud Build</a></li>
	<li><a href="https://www.terraform.io/" target="_blank">Terraform</a></li>
	<li><a href="https://github.com/doitintl/kubeip" target="_blank">kubeIP</a></li>
	<li><a href="https://www.haproxy.com/" target="_blank">HAProxy</a></li>
	<li><a href="https://nodejs.org/en/" target="_blank">Node.js</a></li>
	<li><a href="https://www.typescriptlang.org/" target="_blank">TypeScript</a></li>
	<li><a href="https://www.fastify.io/" target="_blank">Fastify</a></li>
	<li><a href="https://vuejs.org/" target="_blank">Vue.js</a></li>
</ul>

<p>Resources:</p>
<ul>
	<li><a href="https://medium.com/swlh/how-to-kubernetes-for-cheap-on-google-cloud-68203608f00a" target="_blank">How to: Kubernetes for Cheap on Google Cloud</a></li>
	<li><a href="https://cloud.google.com/kubernetes-engine/docs/how-to/small-cluster-tuning" target="_blank">Reducing add-on resource usage in smaller clusters</a></li>
	<li><a href="https://www.haproxy.com/blog/dissecting-the-haproxy-kubernetes-ingress-controller/" target="_blank">Dissecting the HAProxy Kubernetes Ingress Controller</a></li>
	<li><a href="http://alesnosek.com/blog/2017/02/14/accessing-kubernetes-pods-from-outside-of-the-cluster/" target="_blank">Accessing Kubernetes Pods from Outside of the Cluster</a></li>
	<li><a href="https://cloud.google.com/kubernetes-engine/docs/tutorials/gitops-cloud-build" target="_blank">GitOps-style continuous delivery with Cloud Build</a></li>
	<li><a href="https://cloud.google.com/cloud-build/docs/deploying-builds/deploy-gke" target="_blank">Deploying to GKE</a></li>
</ul>

<p>Source available on <a href="https://github.com/boinged" target="_blank">GitHub</a></p>
