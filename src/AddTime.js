const AddTime = async () => {
    const response = await fetch("https://www.timeapi.io/api/Time/current/zone?timeZone=Europe/Amsterdam", {
      method: "GET",
    });
    const resp = await response.json();
    return resp.Time;
  };
  export default AddTime;