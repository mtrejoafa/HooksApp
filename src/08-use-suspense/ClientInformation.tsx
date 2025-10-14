import { Usable, use } from "react"
import { User } from './api/get-user-action';

interface Props {
    getUser: Usable<User>
}

export const ClientInformation = ({getUser}:Props) => {

    const { name, id, location, role } = use(getUser);

  return (
      <div className="bg-gradient flex flex-col gap-4">
          <h2 className="text-2xl font-thin text-white">
              {name} - #{id}
          </h2>
          <p className="text-white text-2xl">
              {location}
          </p>
          <p className="text-white text-xl">{role}</p>
    </div>
  )
}
