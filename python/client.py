import asyncio
import socketio
import threading

sio = socketio.AsyncClient(logger=True, engineio_logger=True)


async def main():
    await sio.connect('http://192.168.9.102:3005', transports=['websocket', 'polling', 'flashsocket'])
    
    await sio.wait()

@sio.event
async def connect():
    print("The connection success!")

@sio.event
def connect_error(data):
    print("The connection failed!",data)

@sio.event
async def disconnect():
    print('disconnected from server')

@sio.on('gamepad_receiver')
async def gamepad_receiver(data):
    print(data)


if __name__ == '__main__':
    asyncio.run(main())