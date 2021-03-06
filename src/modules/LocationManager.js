const remoteURL = "http://localhost:8088"

export const getLocationById = (locationId) => {
  //be sure your animals have good data and related to a location and location
  return fetch(`${remoteURL}/locations/${locationId}?_expand=location&_expand=location`)
  .then(res => res.json())
}

export const getAllLocations = () => {
  return fetch(`${remoteURL}/locations`)
  .then(res => res.json())
}

export const deleteLocation = (id) => {
  return fetch(`${remoteURL}/locations/${id}`, {
    method: "DELETE"
  }).then(result => result.json())
}
