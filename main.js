const {
	app, BrowserWindow, Menu
} = require('electron')

function createWindow() {
	Menu.setApplicationMenu(null)
	const win = new BrowserWindow({
		icon: './TemplateData/favicon.ico',
		show: false,
		webPreferences: {
			nodeIntegration: true
		}
	})
	win.show()

	win.loadFile('index.html')

}


app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit()
	}
})

app.on('activate', () => {
	if (BrowserWindow.getAllWindows().length === 0) {
		createWindow()
	}
})