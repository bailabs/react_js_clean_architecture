#!/bin/bash

########  ####### ######## ######## ######## ######### ######## #######
# Title: ConsoleAway
# Version: 0.9b
# Author: |Ds|
# URL: https://github.com/7Ds7/ConsoleAway/
#
# to comment out console.* from js and coffee files
# do not expect it to work on minified files, use at your own risk
#
# ./consoleaway.sh -f [FILE]
#		To use on a single file
#
# ./ consoleaway.sh -r [FOLDER]
#	To recursively use on a folder
#
# WARNING: this will modify your files make sure you back them up
########  ####### ######## ######## ######## ######### ######## #######

FILE_TMP=''
PLATFORM=`uname`

function ValidationsFile  {
  if [[ -z "$1" ]]; then
		echo "-- Feed me a file --"
		exit
  else
		if [ ! -f $1 ]; then
    	echo "-- File not found! --"
			exit
		fi
		echo ":: Ommm nomm nomm tasty file ::"
  fi
}

function ValidationsFolder {
	if [[ -z "$1" ]]; then
		echo "-- Feed me a folder --"
		exit
  else
		if [ ! -d $1 ]; then
    	echo "-- Folder not found! --"
			exit
		fi
		echo ":: Ommm nomm nomm tasty folder ::"
  fi
}

function ProcessJs {
	# Different platform option to choose regular expressions as extended (modern) regular expressions
	case $PLATFORM in
  	"Linux"  ) FILE_TMP=`sed -r '/^[\s]|[\/]/! s/(console.(assert|clear|count|debug|dir|dirxml|error|group|groupCollapsed|groupEnd|info|log|profile|profileEnd|time|timeEnd|timeStamp|trace|warn)\((.*)\);?)/\/\/\1/g' $1`;;
  	"Darwin" ) FILE_TMP=`sed -E '/^[\s]|[\/]/! s/(console.(assert|clear|count|debug|dir|dirxml|error|group|groupCollapsed|groupEnd|info|log|profile|profileEnd|time|timeEnd|timeStamp|trace|warn)\((.*)\);?)/\/\/\1/g' $1`;;
  	*				) echo $PLARFORM " this OS is not predicted in the script" ;exit;   # Default.
  esac
	cat /dev/null > $1
	echo "$FILE_TMP" > $1
}

function ProcessCoffee {
	# Different platform option to choose regular expressions as extended (modern) regular expressions
  case $PLATFORM in
  	"Linux"  ) FILE_TMP=`sed -r '/^[\s]|[#]/! s/(console.(assert|clear|count|debug|dir|dirxml|error|group|groupCollapsed|groupEnd|info|log|profile|profileEnd|time|timeEnd|timeStamp|trace|warn));?/\#\1/g' $1`;;
  	"Darwin" ) FILE_TMP=`sed -E '/^[\s]|[#]/! s/(console.(assert|clear|count|debug|dir|dirxml|error|group|groupCollapsed|groupEnd|info|log|profile|profileEnd|time|timeEnd|timeStamp|trace|warn));?/\#\1/g' $1`;;
    *        ) echo $PLARFORM " this OS is not predicted in the script" ;exit;   # Default.
  esac
	cat /dev/null > $1
 	echo "$FILE_TMP" > $1
}

function SingleFile {
	ValidationsFile $1
	FILE=$1

	if [[ ! $FILE == *.js && ! $FILE == *.coffee ]]; then
		echo '-- File is not a js or coffee file --'
		exit
	fi

	echo ':: Processing File -> '$1
	if [[ $FILE == *.js ]]; then
		ProcessJs $FILE
	else
 		if [[ $FILE == *.coffee ]]; then
			ProcessCoffee $FILE
 		fi
 	fi
	echo ':: Done Consoles are gone ::'
	exit
}

function RecursiveFolder {
	ValidationsFolder $1
	for f in $(find $1 -name '*.ts' -or -name '*.jsx' -or -name '*.js' -or -name '*.coffee'); do
		echo 'Processing File -> '$f
		if [[ $f == *.js ]]; then
			ProcessJs $f
		elif [[ $f == *.coffee ]]; then
			ProcessCoffee $f
		elif [[ $f == *.ts ]]; then
			ProcessJs $f
		elif [[ $f == *.jsx ]]; then
			ProcessJs $f
		fi
	done
	echo ':: Done Consoles are gone ::'
	exit
}

function Usage {
	echo "Usage: `basename $0` options (-f -r) [FILE || FOLDER]"
	echo""
  echo "consoleaway -h"
  echo "  Prints this message"
  echo ""
	echo "consoleaway -f [FILE.js || FILE.coffee]"
	echo "  Process single file"
	echo ""
	echo "consoleaway -r [FOLDER]"
	echo "  Process folder recursively"
	echo ""
	echo "WARNING: this will modify your files make sure you back them up"
  exit $E_OPTERROR          # Exit and explain usage.
                            # Usage: scriptname -options
                            # Note: dash (-) necessary
}

# Here we observe how 'getopts' processes command-line arguments to script.
# The arguments are parsed as "options" (flags) and associated arguments.

NO_ARGS=0
E_OPTERROR=85

if [ $# -eq "$NO_ARGS" ]    # Script invoked with no command-line args?
then
	Usage
fi

while getopts ":frh" Option
do
  case $Option in
    f     ) SingleFile $2;;
    r		  ) RecursiveFolder $2;;
		h			) Usage;;
    *     ) echo "Unimplemented option chosen.";exit;   # Default.
  esac
done

shift $(($OPTIND - 1))
#  Decrements the argument pointer so it points to next argument.
#  $1 now references the first non-option item supplied on the command-line
#+ if one exists.