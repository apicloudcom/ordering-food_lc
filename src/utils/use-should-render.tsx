
export function useShouldRender(
  active: boolean,
  forceRender?: boolean,
  destroyOnClose?: boolean
) {
  const initialized = active
  if (forceRender) return true
  if (active) return true
  if (!initialized) return false
  return !destroyOnClose
}