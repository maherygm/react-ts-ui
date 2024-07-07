import React, { lazy, useEffect } from "react";
import { Root, getPhoto } from "./services/apiService";

const CUSTOM = lazy(() => import("./@components/ui/customcard"));

import Customcard from "./@components/ui/customcard";
import Skeleton from "./@components/ui/skeleton";

export default function App(): React.ReactElement {
  const [photo, setPhoto] = React.useState<Root[]>([]);
  useEffect(() => {
    const photoPromise = getPhoto();

    photoPromise.then((data) => {
      setPhoto(data);

      console.log(photo);
    });
  }, []);

  return (
    <>
      <div className="min-h-screen bg-zinc-900 ">
        <div className="dark text-white  items-center justify-center   gap-4 ">
          <h1 className="text-4xl text-center p-8">Photos</h1>
        </div>
        <div className="dark text-white my-0 mx-auto w-screen justify-center items-center  flex flex-wrap  gap-4 bg-zinc-900 ">
          {photo.length < 1
            ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                <Skeleton key={item} />
              ))
            : photo.map((item) => (
                <div className="">
                  <Customcard
                    images={item.urls.full}
                    description={item.description}
                    user={item.user.name}
                  />
                </div>
              ))}
        </div>
      </div>
    </>
  );
}
