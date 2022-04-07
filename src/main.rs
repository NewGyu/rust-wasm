use std::{fs, io::{Read, Write}, env};

fn main() {
    let args: Vec<String> = env::args().collect();
    let program = args[0].clone();

    if args.len() < 3 {
        eprintln!("{} <input_file> <output_file>", program);
        return;
    }

    if let Err(err) = process(&args[1], &args[2]) {
        eprintln!("{}", err)
    }
}

fn process(input_fname: &str, output_fname: &str) -> Result<(), String> {
    let mut contents = read_contents_from(input_fname)?;
    write_contents_to(output_fname, &mut contents)
}

fn read_contents_from(filename: &str) -> Result<Vec<u8>, String> {
    let mut input_file = fs::File::open(filename)
        .map_err(|e|format!("error opening input: {}",e))?;
    let mut contents = Vec::new();
    input_file.read_to_end(&mut contents)
        .map_err(|e|format!("read error: {}",e))?;
    Ok(contents)
}

fn write_contents_to(filename: &str, contents: &mut Vec<u8>) -> Result<(), String> {
    let mut output_file = fs::File::create(filename)
        .map_err(|e| format!("error opening output {}", e))?;
    output_file.write_all(contents)
        .map_err(|e|format!("write error: {}",e))
}