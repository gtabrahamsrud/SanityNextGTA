// import { createClient } from "next-sanity";

export default function IndexPage({ pets }) {
  return (
    <>
      <header>
        <h1>Sanity + Next.js</h1>
      </header>
      <main>
        <h2>Pets</h2>
        {/* {pets.length > 0 && (
          <ul>
            {pets.map((pet) => (
              <li key={pet._id}>{pet?.name} gender: {pet?.gender} weight:{pet?.weight}</li>
            ))}
          </ul>
        )}
        {!pets.length > 0 && <p>No pets to show</p>}
        {!pets.length > 0 && (
          <div>
            <div>¯\_(ツ)_/¯</div>
            <p>
              Your data will show up here when you've configured everything
              correctly
            </p>
          </div>
        )} */}
      </main>
    </>
  );
}

// const client = createClient({
//   projectId: "1suircmx",
//   dataset: "production",
//   apiVersion: "2023-02-16",
//   useCdn: false
// });

// export async function getStaticProps() {
//   const pets = await client.fetch(`*[_type == "pet"]`);

//   return {
//     props: {
//       pets
//     }
//   };
// }
