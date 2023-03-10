from database import database
from base.do import AdvertiserAccount

async def get(advertiser_id: int) -> AdvertiserAccount:
    database.cur.execute(f"SELECT id, name, introduction FROM advertiser_account where id={advertiser_id}")
    row = database.cur.fetchone()
    return AdvertiserAccount(id=row[0], name=row[1], introduction=row[2])