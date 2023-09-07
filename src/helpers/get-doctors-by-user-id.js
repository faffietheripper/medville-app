import { fetchRedis } from "./redis";

export async function getDoctorsByUserId(userId) {
  // retrieve friends for current user
  console.log("userid", userId);
  const doctorIds = await fetchRedis("smembers", `user:${userId}:doctors`);

  console.log("doctor ids", doctorIds);

  const doctors = await Promise.all(
    doctorIds.map(async (doctorId) => {
      const doctor = await fetchRedis("get", `user:${doctorId}`);
      const parsedDoctor = JSON.parse(doctor);
      return parsedDoctor;
    })
  );

  return doctors;
}
