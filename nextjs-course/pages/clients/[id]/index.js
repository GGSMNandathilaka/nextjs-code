import { useRouter } from "next/router";

function ClientsProjectPage() {
  const router = useRouter();

  function loadProjectHandler() {
    router.push({
      pathname: "/clients/[id]/[projectid]",
      query: {
        id: router.query.id,
        projectid: "project1",
      },
    });
  }

  return (
    <div>
      <h1>Clients Projects Page</h1>
      <button onClick={loadProjectHandler}>Load project</button>
    </div>
  );
}

export default ClientsProjectPage;
