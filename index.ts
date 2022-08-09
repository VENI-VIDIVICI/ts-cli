import { program } from "commander"
import { create } from './create'
program.option('-v, --version').version('0.0.0')
program.command('create <name>').action(create)
program.parse(process.argv)