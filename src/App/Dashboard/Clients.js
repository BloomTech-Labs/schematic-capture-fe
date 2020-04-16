import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { dispatchers } from "../../shared/actions/dashboardActions"

const { fetchClients } = dispatchers

const Clients = () => {
  const dispatch = useDispatch()
  const clients = useSelector(state => state.dashboard.clients)
  console.log(clients)

  useEffect(() => {
    dispatch(fetchClients())
  }, [])

  return (
    <section>
      <h2>Clients</h2>
      <div>
        {clients &&
          clients.map(client => (
            <Link
              data-client-name
              key={client.id}
              to={`/client/${client.id}`}
            >
              {client.companyName}
              <div>Complete</div>
              <div>Incomplete</div>
            </Link>
          ))}
      </div>
    </section>
  )
}

export default Clients
