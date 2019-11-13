const path = require('path')
const appRootPath = require('app-root-path')

const ROOT_DIR = appRootPath.toString()
const SRC_DIR = path.resolve(ROOT_DIR, 'src')
const DIST_DIR = path.resolve(ROOT_DIR, 'dist')
const DLL_DIR = path.resolve(DIST_DIR, 'dll')
const ENTRY = './src/index.tsx'

module.exports = {
  ROOT_DIR,
  SRC_DIR,
  DIST_DIR,
  DLL_DIR,
  ENTRY,
}