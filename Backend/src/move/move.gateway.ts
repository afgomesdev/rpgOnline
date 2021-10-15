import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';

@WebSocketGateway({ cors: true })
export class MoveGatway {
  @WebSocketServer()
  server;

  @SubscribeMessage(`move`)
  handleMassage(@MessageBody() move: string): void {
    this.server.emit(`move`, move);
  }
}
