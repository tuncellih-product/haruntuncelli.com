#!/usr/bin/env bash
# Deploy haruntuncelli.com → WebHostingHub via rsync over SSH.
# Usage:
#   ./deploy.sh            # deploy
#   ./deploy.sh --dry-run  # preview changes, don't apply
#
# Note: this script does NOT delete remote files. public_html/ on this
# hosting account also serves addon domains (tuncellidesign.com,
# foolishpanda.com, bmtdesign.com) and Let's Encrypt's .well-known/
# directory. Mirroring with --delete would wipe them.
# If you ever need to remove a stale file from the server, do it
# manually via cPanel File Manager or SFTP.
set -euo pipefail

SSH_KEY="$HOME/.ssh/whh_haruntuncelli"
SSH_USER="harunt5"
SSH_HOST="secure66.webhostinghub.com"
SSH_PORT="2222"
LOCAL_DIR="$HOME/Desktop/haruntuncelli.com/"
REMOTE_DIR="public_html/"

DRY_RUN=""
if [[ "${1:-}" == "--dry-run" ]]; then
  DRY_RUN="--dry-run"
  echo ">>> DRY RUN — no files will be changed on the server."
fi

rsync -avz $DRY_RUN \
  --exclude='.git/' \
  --exclude='.DS_Store' \
  --exclude='*-backup-*/' \
  --exclude='deploy.sh' \
  --exclude='*.zip' \
  --exclude='__MACOSX/' \
  -e "ssh -i $SSH_KEY -p $SSH_PORT" \
  "$LOCAL_DIR" \
  "$SSH_USER@$SSH_HOST:$REMOTE_DIR"

if [[ -z "$DRY_RUN" ]]; then
  echo ""
  echo ">>> Deploy complete. Verify at https://haruntuncelli.com"
fi
