package cn.swifthealth.doctorApp.wxapi;    // 这里改为你的包名

import android.app.Activity;
import android.content.Intent;
import android.util.Log;

import cn.swifthealth.doctorApp.MainActivity;
import com.tencent.mm.opensdk.constants.ConstantsAPI;
import com.tencent.mm.opensdk.modelbase.BaseReq;
import com.tencent.mm.opensdk.modelbase.BaseResp;
import com.tencent.mm.opensdk.modelbiz.WXLaunchMiniProgram;
import com.tencent.mm.opensdk.modelmsg.ShowMessageFromWX;
import com.tencent.mm.opensdk.modelmsg.WXAppExtendObject;
import com.tencent.mm.opensdk.modelmsg.WXMediaMessage;
import com.tencent.mm.opensdk.openapi.IWXAPIEventHandler;
import com.theweflex.react.WeChatModule;
import android.os.Bundle;
import android.widget.Toast;

public class WXEntryActivity extends Activity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        WeChatModule.handleIntent(getIntent());
        Log.d("WXEntryActivity", "onCreate:" + getIntent().getStringExtra("a"));
        finish();
    }
}
