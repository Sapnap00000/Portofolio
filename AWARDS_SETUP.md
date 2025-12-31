# Award Counter - Static JSON Setup

## How it works

1. **Award count is stored in** `data/awards.json`
2. **Page loads** → fetches the count from JSON
3. **User clicks award button** → count increments locally (localStorage)
4. **To sync change to GitHub** → manually edit `data/awards.json` and push

## Updating award count

When you receive awards:

1. Open `data/awards.json`
2. Increment the `count` value:
   ```json
   {
     "count": 5,
     "lastUpdated": "2025-12-31"
   }
   ```
3. Update `lastUpdated` with current date
4. Commit and push to GitHub:
   ```bash
   git add data/awards.json
   git commit -m "Update award count to 5"
   git push
   ```

## How visitors see it

- ✅ Award count displays from `data/awards.json` (single source of truth)
- ✅ Synced across all devices
- ✅ Visitors can click to increment locally (visual feedback only)
- ✅ Their increment resets on page refresh (localStorage session-based)

## Fallback

If `data/awards.json` fails to load, browser falls back to localStorage.
