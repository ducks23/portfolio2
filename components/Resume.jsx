export default function Resume() {
  return (
    <div className=" flex  text-gray-700 flex-col font-mono max-w-3xl container mx-auto p-7 mb-8">
      <h1 className=" text-center md:mt-0 mt-10 text-3xl">Jesse Leonard</h1>
      <div className="pt-5">
        &nbsp; I’m a Backend Software Engineer that has really enjoyed working
        for fast paced start ups in my career. I’m very motivated by learning
        and implementing new technologies that save my companies time and money.
        I strive to be the best engineer I can be and am working towards being
        certified as an AWS Solutions Architect.
      </div>
      <div className="pt-6 text-2xl underline underline-offset-4 pb-2">
        Education
      </div>
      <div>2018: University of Oregon, Bachelors of Science.</div>
      <div>Computer and Information Sciences</div>
      <div className="pt-6 underline underline-offset-4 text-2xl">
        Work Experience
      </div>
      <div className="text-xs">4 Years.</div>
      <div className="pt-4 text-xl underline underline-offset-2">
        IPTA Solutions
      </div>
      <div className="text-sm">Austin, Tx.</div>
      <div className="text-sm">Jun. 2023 - Present</div>
      <div className="pt-4">
        I work at a Veteran Owned Small Business that fulfills contracts for the
        Department of Defense.
      </div>
      <div className="pt-5">Duties Included:</div>
      <ul class="list-disc list-inside ml-4">
        <li className="pt-3">Full Stack Software develoment.</li>
      </ul>{" "}
      <div className="pt-4 text-xl underline underline-offset-2">Vectra AI</div>
      <div className="text-sm">Austin, Tx.</div>
      <div className="text-sm"> Apr. 2021 - Apr. 2023</div>
      <div className="pt-4">
        I worked at a unicorn cyber security start up in Austin Texas on the
        Saas Platform team. I was given the resposibility of connecting our on
        premise Back End Django Application to Our Saas Application running on
        EKS.
      </div>
      <div className="pt-5">Duties Included:</div>
      <ul class="list-disc list-inside ml-4">
        <li className="pt-3">
          Designed, built, and deployed fault tolerant distributed systems
          forwarding network data between on premise and cloud infrastructure in
          python.
        </li>
        <li className="pt-3">
          Created API endpoints to Create, Update, Delete Users, as well as
          manage the hosts.
        </li>{" "}
        <li className="pt-3">
          Created custom jwt authentication back end in Django REST Framework.
        </li>{" "}
        <li className="pt-3">
          Congifured Kubernetes in AWS using design patterns that allowed for
          scalable multi tenant deployment and configuration.
        </li>
        <li className="pt-3">
          Intermittently Led the deployment to release of our code in jenkins,
          making announcements daily about any build and deployment issues,
          promoting from dev to stage to prod, and testing the deployments.
        </li>
        <li className="pt-3">
          Implemented a cli that was responsible for provisioning and updating
          resources needed when onboarding customers.
        </li>
      </ul>{" "}
      <div className="pt-4 text-xl underline underline-offset-2">
        OmniVector Solutions
      </div>
      <div className="text-sm"> Portland, Or.</div>
      <div className="text-sm"> Feb. 2019 - Mar. 2021</div>
      <div className="pt-4">
        I worked at a small start working closely with the founder James Beedy.
        We worked on building automation tools that would deploy and cofigure
        High Performance Computers at scale with up to 100+ nodes.
      </div>
      <div className="pt-5">Duties Included:</div>
      <ul class="list-disc list-inside ml-4">
        <li className="pt-3">
          Wrote automation software using Juju and kubernetes to dynamically
          configure, deploy, and horizontally scale HPC systems for our
          enterprise clients.
        </li>
        <li className="pt-3">
          Improved my linux skills to be able to configure our software across
          multiple distrubtions, ie Centos and Ubuntu servers.
        </li>
        <li className="pt-3">
          Created CI/CD pipelines using Github Actions to effectively set up the
          environment, build the software, test, version, and release our
          products.
        </li>
        <li className="pt-3">
          Helped set up our MaaS environment. This included setting up the
          network, making nodes discoverable, setting up the network switches,
          and firewall rules.
        </li>
      </ul>
    </div>
  );
}
