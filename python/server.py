
import socketio

sio = socketio.AsyncServer()

# wrap with ASGI application
app = socketio.ASGIApp(sio)