const remoteURL = "http://localhost:5002"

export const getCustomerById = (customerId) => {
  //be sure your animals have good data and related to a location and customer
  return fetch(`${remoteURL}/customers/${customerId}?_expand=location&_expand=customer`)
  .then(res => res.json())
}

export const getAllCustomers = () => {
  return fetch(`${remoteURL}/customers`)
  .then(res => res.json())
}

