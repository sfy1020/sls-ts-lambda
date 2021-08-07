export default {
  type: "object",
  properties: {
    name: { type: 'string' }
  },
  required: ['name']
} as const;

export const sub = {
  type: "object",
  properties: {
    name: { type: 'string' }
  }
}