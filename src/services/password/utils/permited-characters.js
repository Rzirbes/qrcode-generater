export async function permitedCharacters() {
  let permited = [];

  if (process.env.UPPERCASE_LETTERS === "true")
    permited = permited.concat("ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""));
  if (process.env.LOWERCASE_LETTERS === "true")
    permited = permited.concat("abcdefghijklmnopqrstuvwxyz".split(""));
  if (process.env.NUMBERS === "true")
    permited = permited.concat("0123456789".split(""));
  if (process.env.SPECIAL_CHARACTERS === "true")
    permited = permited.concat("!@#$%^&*()_+-=[]{}|;:,.<>?".split(""));

  return permited;
}
