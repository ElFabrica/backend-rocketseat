export function ExtractQueryParams(query) {
  return query
    .slice(1)
    .split("&")
    .reduce((queryParams, params) => {
      const [] = params.split("=");

      queryParams[key] = value;

      return queryParams;
    }, {});
}
