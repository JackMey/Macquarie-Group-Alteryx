import { AlteryxConnection } from '~/models';

export const parseConnection = (connection: any): AlteryxConnection => {
  return {
    origin: {
      ToolID: connection.Origin?.[0].$.ToolID,
      Connection: connection.Origin?.[0].$.Connection,
    },
    destination: {
      ToolID: connection.Destination?.[0].$.ToolID,
      Connection: connection.Destination?.[0].$.Connection,
    }
  };
}
