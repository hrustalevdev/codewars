/**
 * Take the following IPv4 address: 128.32.10.1
 *
 * This address has 4 octets where each octet is a single byte (or 8 bits).
 *
 * 1st octet 128 has the binary representation: 10000000
 * 2nd octet 32 has the binary representation: 00100000
 * 3rd octet 10 has the binary representation: 00001010
 * 4th octet 1 has the binary representation: 00000001
 * So 128.32.10.1 == 10000000.00100000.00001010.00000001
 *
 * Because the above IP address has 32 bits, we can represent it as the unsigned 32 bit number: 2149583361
 *
 * Complete the function that takes an unsigned 32 bit number and returns a string representation of its IPv4 address.
 *
 * Examples
 * 2149583361 ==> "128.32.10.1"
 * 32         ==> "0.0.0.32"
 * 0          ==> "0.0.0.0"
 *
 * @param {number} int32
 * @return {string}
 */
function int32ToIp(int32){
  // const binaryIp = int32.toString(2).padStart(32, '0');
  // return `${parseInt(binaryIp.slice(0,8), 2)}.${parseInt(binaryIp.slice(8,16), 2)}.${parseInt(binaryIp.slice(16,24), 2)}.${parseInt(binaryIp.slice(24,32), 2)}`;

  // return (
  //   ((int32 >> 24) & 0xFF) + "." +
  //   ((int32 >> 16) & 0xFF) + "." +
  //   ((int32 >>  8) & 0xFF) + "." +
  //   ((int32) & 0xFF)
  // );

  return [
    (int32 >> 24) & 0xFF,
    (int32 >> 16) & 0xFF,
    (int32 >> 8) & 0xFF,
    int32 & 0xFF,
  ].join('.')
}

console.log(int32ToIp(44));
console.log(int32ToIp(2149583361));
