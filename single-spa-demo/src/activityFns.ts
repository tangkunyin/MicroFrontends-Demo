export function prefix(location, ...prefixes) {
  return prefixes.some(
    (prefix) => location.href.indexOf(`${location.origin}/${prefix}`) !== -1
  );
}

export function react(location) {
  return prefix(location, "react");
}

export function vue(location) {
  return prefix(location, "vue");
}

export function svelte(location) {
  return !react(location) && !vue(location);
}
